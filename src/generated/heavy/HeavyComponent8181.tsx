'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8181<T> = T extends (infer U)[]
  ? DeepReadonlyArray8181<U>
  : T extends object
  ? DeepReadonlyObject8181<T>
  : T;

interface DeepReadonlyArray8181<T> extends ReadonlyArray<DeepReadonly8181<T>> {}

type DeepReadonlyObject8181<T> = {
  readonly [P in keyof T]: DeepReadonly8181<T[P]>;
};

type UnionToIntersection8181<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8181<T> = UnionToIntersection8181<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8181<T extends unknown[], V> = [...T, V];

type TuplifyUnion8181<T, L = LastOf8181<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8181<TuplifyUnion8181<Exclude<T, L>>, L>;

type DeepPartial8181<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8181<T[P]> }
  : T;

type Paths8181<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8181<K, Paths8181<T[K], Prev8181[D]>> : never }[keyof T]
  : never;

type Prev8181 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8181<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8181 {
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

type ConfigPaths8181 = Paths8181<NestedConfig8181>;

interface HeavyProps8181 {
  config: DeepPartial8181<NestedConfig8181>;
  path?: ConfigPaths8181;
}

const HeavyComponent8181 = memo(function HeavyComponent8181({ config }: HeavyProps8181) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8181) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8181 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8181: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8181.displayName = 'HeavyComponent8181';
export default HeavyComponent8181;
