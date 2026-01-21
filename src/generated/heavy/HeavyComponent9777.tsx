'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9777<T> = T extends (infer U)[]
  ? DeepReadonlyArray9777<U>
  : T extends object
  ? DeepReadonlyObject9777<T>
  : T;

interface DeepReadonlyArray9777<T> extends ReadonlyArray<DeepReadonly9777<T>> {}

type DeepReadonlyObject9777<T> = {
  readonly [P in keyof T]: DeepReadonly9777<T[P]>;
};

type UnionToIntersection9777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9777<T> = UnionToIntersection9777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9777<T extends unknown[], V> = [...T, V];

type TuplifyUnion9777<T, L = LastOf9777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9777<TuplifyUnion9777<Exclude<T, L>>, L>;

type DeepPartial9777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9777<T[P]> }
  : T;

type Paths9777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9777<K, Paths9777<T[K], Prev9777[D]>> : never }[keyof T]
  : never;

type Prev9777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9777 {
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

type ConfigPaths9777 = Paths9777<NestedConfig9777>;

interface HeavyProps9777 {
  config: DeepPartial9777<NestedConfig9777>;
  path?: ConfigPaths9777;
}

const HeavyComponent9777 = memo(function HeavyComponent9777({ config }: HeavyProps9777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9777.displayName = 'HeavyComponent9777';
export default HeavyComponent9777;
