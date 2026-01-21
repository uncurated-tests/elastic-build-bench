'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8981<T> = T extends (infer U)[]
  ? DeepReadonlyArray8981<U>
  : T extends object
  ? DeepReadonlyObject8981<T>
  : T;

interface DeepReadonlyArray8981<T> extends ReadonlyArray<DeepReadonly8981<T>> {}

type DeepReadonlyObject8981<T> = {
  readonly [P in keyof T]: DeepReadonly8981<T[P]>;
};

type UnionToIntersection8981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8981<T> = UnionToIntersection8981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8981<T extends unknown[], V> = [...T, V];

type TuplifyUnion8981<T, L = LastOf8981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8981<TuplifyUnion8981<Exclude<T, L>>, L>;

type DeepPartial8981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8981<T[P]> }
  : T;

type Paths8981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8981<K, Paths8981<T[K], Prev8981[D]>> : never }[keyof T]
  : never;

type Prev8981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8981 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths8981 = Paths8981<NestedConfig8981>;

interface HeavyProps8981 {
  config: DeepPartial8981<NestedConfig8981>;
  path?: ConfigPaths8981;
}

const HeavyComponent8981 = memo(function HeavyComponent8981({ config }: HeavyProps8981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8981.displayName = 'HeavyComponent8981';
export default HeavyComponent8981;
