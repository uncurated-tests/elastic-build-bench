'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9603<T> = T extends (infer U)[]
  ? DeepReadonlyArray9603<U>
  : T extends object
  ? DeepReadonlyObject9603<T>
  : T;

interface DeepReadonlyArray9603<T> extends ReadonlyArray<DeepReadonly9603<T>> {}

type DeepReadonlyObject9603<T> = {
  readonly [P in keyof T]: DeepReadonly9603<T[P]>;
};

type UnionToIntersection9603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9603<T> = UnionToIntersection9603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9603<T extends unknown[], V> = [...T, V];

type TuplifyUnion9603<T, L = LastOf9603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9603<TuplifyUnion9603<Exclude<T, L>>, L>;

type DeepPartial9603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9603<T[P]> }
  : T;

type Paths9603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9603<K, Paths9603<T[K], Prev9603[D]>> : never }[keyof T]
  : never;

type Prev9603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9603 {
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

type ConfigPaths9603 = Paths9603<NestedConfig9603>;

interface HeavyProps9603 {
  config: DeepPartial9603<NestedConfig9603>;
  path?: ConfigPaths9603;
}

const HeavyComponent9603 = memo(function HeavyComponent9603({ config }: HeavyProps9603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9603.displayName = 'HeavyComponent9603';
export default HeavyComponent9603;
