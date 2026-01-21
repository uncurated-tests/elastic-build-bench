'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9090<T> = T extends (infer U)[]
  ? DeepReadonlyArray9090<U>
  : T extends object
  ? DeepReadonlyObject9090<T>
  : T;

interface DeepReadonlyArray9090<T> extends ReadonlyArray<DeepReadonly9090<T>> {}

type DeepReadonlyObject9090<T> = {
  readonly [P in keyof T]: DeepReadonly9090<T[P]>;
};

type UnionToIntersection9090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9090<T> = UnionToIntersection9090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9090<T extends unknown[], V> = [...T, V];

type TuplifyUnion9090<T, L = LastOf9090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9090<TuplifyUnion9090<Exclude<T, L>>, L>;

type DeepPartial9090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9090<T[P]> }
  : T;

type Paths9090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9090<K, Paths9090<T[K], Prev9090[D]>> : never }[keyof T]
  : never;

type Prev9090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9090 {
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

type ConfigPaths9090 = Paths9090<NestedConfig9090>;

interface HeavyProps9090 {
  config: DeepPartial9090<NestedConfig9090>;
  path?: ConfigPaths9090;
}

const HeavyComponent9090 = memo(function HeavyComponent9090({ config }: HeavyProps9090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9090.displayName = 'HeavyComponent9090';
export default HeavyComponent9090;
