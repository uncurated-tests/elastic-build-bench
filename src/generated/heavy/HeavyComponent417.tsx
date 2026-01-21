'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly417<T> = T extends (infer U)[]
  ? DeepReadonlyArray417<U>
  : T extends object
  ? DeepReadonlyObject417<T>
  : T;

interface DeepReadonlyArray417<T> extends ReadonlyArray<DeepReadonly417<T>> {}

type DeepReadonlyObject417<T> = {
  readonly [P in keyof T]: DeepReadonly417<T[P]>;
};

type UnionToIntersection417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf417<T> = UnionToIntersection417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push417<T extends unknown[], V> = [...T, V];

type TuplifyUnion417<T, L = LastOf417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push417<TuplifyUnion417<Exclude<T, L>>, L>;

type DeepPartial417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial417<T[P]> }
  : T;

type Paths417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join417<K, Paths417<T[K], Prev417[D]>> : never }[keyof T]
  : never;

type Prev417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig417 {
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

type ConfigPaths417 = Paths417<NestedConfig417>;

interface HeavyProps417 {
  config: DeepPartial417<NestedConfig417>;
  path?: ConfigPaths417;
}

const HeavyComponent417 = memo(function HeavyComponent417({ config }: HeavyProps417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent417.displayName = 'HeavyComponent417';
export default HeavyComponent417;
