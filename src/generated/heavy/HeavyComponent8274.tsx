'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8274<T> = T extends (infer U)[]
  ? DeepReadonlyArray8274<U>
  : T extends object
  ? DeepReadonlyObject8274<T>
  : T;

interface DeepReadonlyArray8274<T> extends ReadonlyArray<DeepReadonly8274<T>> {}

type DeepReadonlyObject8274<T> = {
  readonly [P in keyof T]: DeepReadonly8274<T[P]>;
};

type UnionToIntersection8274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8274<T> = UnionToIntersection8274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8274<T extends unknown[], V> = [...T, V];

type TuplifyUnion8274<T, L = LastOf8274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8274<TuplifyUnion8274<Exclude<T, L>>, L>;

type DeepPartial8274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8274<T[P]> }
  : T;

type Paths8274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8274<K, Paths8274<T[K], Prev8274[D]>> : never }[keyof T]
  : never;

type Prev8274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8274 {
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

type ConfigPaths8274 = Paths8274<NestedConfig8274>;

interface HeavyProps8274 {
  config: DeepPartial8274<NestedConfig8274>;
  path?: ConfigPaths8274;
}

const HeavyComponent8274 = memo(function HeavyComponent8274({ config }: HeavyProps8274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8274.displayName = 'HeavyComponent8274';
export default HeavyComponent8274;
