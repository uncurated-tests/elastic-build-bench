'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly22<T> = T extends (infer U)[]
  ? DeepReadonlyArray22<U>
  : T extends object
  ? DeepReadonlyObject22<T>
  : T;

interface DeepReadonlyArray22<T> extends ReadonlyArray<DeepReadonly22<T>> {}

type DeepReadonlyObject22<T> = {
  readonly [P in keyof T]: DeepReadonly22<T[P]>;
};

type UnionToIntersection22<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf22<T> = UnionToIntersection22<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push22<T extends unknown[], V> = [...T, V];

type TuplifyUnion22<T, L = LastOf22<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push22<TuplifyUnion22<Exclude<T, L>>, L>;

type DeepPartial22<T> = T extends object
  ? { [P in keyof T]?: DeepPartial22<T[P]> }
  : T;

type Paths22<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join22<K, Paths22<T[K], Prev22[D]>> : never }[keyof T]
  : never;

type Prev22 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join22<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig22 {
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

type ConfigPaths22 = Paths22<NestedConfig22>;

interface HeavyProps22 {
  config: DeepPartial22<NestedConfig22>;
  path?: ConfigPaths22;
}

const HeavyComponent22 = memo(function HeavyComponent22({ config }: HeavyProps22) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 22) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-22 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H22: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent22.displayName = 'HeavyComponent22';
export default HeavyComponent22;
