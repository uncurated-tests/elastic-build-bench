'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9405<T> = T extends (infer U)[]
  ? DeepReadonlyArray9405<U>
  : T extends object
  ? DeepReadonlyObject9405<T>
  : T;

interface DeepReadonlyArray9405<T> extends ReadonlyArray<DeepReadonly9405<T>> {}

type DeepReadonlyObject9405<T> = {
  readonly [P in keyof T]: DeepReadonly9405<T[P]>;
};

type UnionToIntersection9405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9405<T> = UnionToIntersection9405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9405<T extends unknown[], V> = [...T, V];

type TuplifyUnion9405<T, L = LastOf9405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9405<TuplifyUnion9405<Exclude<T, L>>, L>;

type DeepPartial9405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9405<T[P]> }
  : T;

type Paths9405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9405<K, Paths9405<T[K], Prev9405[D]>> : never }[keyof T]
  : never;

type Prev9405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9405 {
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

type ConfigPaths9405 = Paths9405<NestedConfig9405>;

interface HeavyProps9405 {
  config: DeepPartial9405<NestedConfig9405>;
  path?: ConfigPaths9405;
}

const HeavyComponent9405 = memo(function HeavyComponent9405({ config }: HeavyProps9405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9405.displayName = 'HeavyComponent9405';
export default HeavyComponent9405;
