'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9974<T> = T extends (infer U)[]
  ? DeepReadonlyArray9974<U>
  : T extends object
  ? DeepReadonlyObject9974<T>
  : T;

interface DeepReadonlyArray9974<T> extends ReadonlyArray<DeepReadonly9974<T>> {}

type DeepReadonlyObject9974<T> = {
  readonly [P in keyof T]: DeepReadonly9974<T[P]>;
};

type UnionToIntersection9974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9974<T> = UnionToIntersection9974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9974<T extends unknown[], V> = [...T, V];

type TuplifyUnion9974<T, L = LastOf9974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9974<TuplifyUnion9974<Exclude<T, L>>, L>;

type DeepPartial9974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9974<T[P]> }
  : T;

type Paths9974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9974<K, Paths9974<T[K], Prev9974[D]>> : never }[keyof T]
  : never;

type Prev9974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9974 {
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

type ConfigPaths9974 = Paths9974<NestedConfig9974>;

interface HeavyProps9974 {
  config: DeepPartial9974<NestedConfig9974>;
  path?: ConfigPaths9974;
}

const HeavyComponent9974 = memo(function HeavyComponent9974({ config }: HeavyProps9974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9974.displayName = 'HeavyComponent9974';
export default HeavyComponent9974;
