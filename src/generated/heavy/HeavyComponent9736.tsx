'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9736<T> = T extends (infer U)[]
  ? DeepReadonlyArray9736<U>
  : T extends object
  ? DeepReadonlyObject9736<T>
  : T;

interface DeepReadonlyArray9736<T> extends ReadonlyArray<DeepReadonly9736<T>> {}

type DeepReadonlyObject9736<T> = {
  readonly [P in keyof T]: DeepReadonly9736<T[P]>;
};

type UnionToIntersection9736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9736<T> = UnionToIntersection9736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9736<T extends unknown[], V> = [...T, V];

type TuplifyUnion9736<T, L = LastOf9736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9736<TuplifyUnion9736<Exclude<T, L>>, L>;

type DeepPartial9736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9736<T[P]> }
  : T;

type Paths9736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9736<K, Paths9736<T[K], Prev9736[D]>> : never }[keyof T]
  : never;

type Prev9736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9736 {
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

type ConfigPaths9736 = Paths9736<NestedConfig9736>;

interface HeavyProps9736 {
  config: DeepPartial9736<NestedConfig9736>;
  path?: ConfigPaths9736;
}

const HeavyComponent9736 = memo(function HeavyComponent9736({ config }: HeavyProps9736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9736.displayName = 'HeavyComponent9736';
export default HeavyComponent9736;
