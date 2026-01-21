'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9887<T> = T extends (infer U)[]
  ? DeepReadonlyArray9887<U>
  : T extends object
  ? DeepReadonlyObject9887<T>
  : T;

interface DeepReadonlyArray9887<T> extends ReadonlyArray<DeepReadonly9887<T>> {}

type DeepReadonlyObject9887<T> = {
  readonly [P in keyof T]: DeepReadonly9887<T[P]>;
};

type UnionToIntersection9887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9887<T> = UnionToIntersection9887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9887<T extends unknown[], V> = [...T, V];

type TuplifyUnion9887<T, L = LastOf9887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9887<TuplifyUnion9887<Exclude<T, L>>, L>;

type DeepPartial9887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9887<T[P]> }
  : T;

type Paths9887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9887<K, Paths9887<T[K], Prev9887[D]>> : never }[keyof T]
  : never;

type Prev9887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9887 {
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

type ConfigPaths9887 = Paths9887<NestedConfig9887>;

interface HeavyProps9887 {
  config: DeepPartial9887<NestedConfig9887>;
  path?: ConfigPaths9887;
}

const HeavyComponent9887 = memo(function HeavyComponent9887({ config }: HeavyProps9887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9887.displayName = 'HeavyComponent9887';
export default HeavyComponent9887;
