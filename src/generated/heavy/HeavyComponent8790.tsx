'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8790<T> = T extends (infer U)[]
  ? DeepReadonlyArray8790<U>
  : T extends object
  ? DeepReadonlyObject8790<T>
  : T;

interface DeepReadonlyArray8790<T> extends ReadonlyArray<DeepReadonly8790<T>> {}

type DeepReadonlyObject8790<T> = {
  readonly [P in keyof T]: DeepReadonly8790<T[P]>;
};

type UnionToIntersection8790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8790<T> = UnionToIntersection8790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8790<T extends unknown[], V> = [...T, V];

type TuplifyUnion8790<T, L = LastOf8790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8790<TuplifyUnion8790<Exclude<T, L>>, L>;

type DeepPartial8790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8790<T[P]> }
  : T;

type Paths8790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8790<K, Paths8790<T[K], Prev8790[D]>> : never }[keyof T]
  : never;

type Prev8790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8790 {
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

type ConfigPaths8790 = Paths8790<NestedConfig8790>;

interface HeavyProps8790 {
  config: DeepPartial8790<NestedConfig8790>;
  path?: ConfigPaths8790;
}

const HeavyComponent8790 = memo(function HeavyComponent8790({ config }: HeavyProps8790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8790.displayName = 'HeavyComponent8790';
export default HeavyComponent8790;
