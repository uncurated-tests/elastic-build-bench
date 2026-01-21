'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9926<T> = T extends (infer U)[]
  ? DeepReadonlyArray9926<U>
  : T extends object
  ? DeepReadonlyObject9926<T>
  : T;

interface DeepReadonlyArray9926<T> extends ReadonlyArray<DeepReadonly9926<T>> {}

type DeepReadonlyObject9926<T> = {
  readonly [P in keyof T]: DeepReadonly9926<T[P]>;
};

type UnionToIntersection9926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9926<T> = UnionToIntersection9926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9926<T extends unknown[], V> = [...T, V];

type TuplifyUnion9926<T, L = LastOf9926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9926<TuplifyUnion9926<Exclude<T, L>>, L>;

type DeepPartial9926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9926<T[P]> }
  : T;

type Paths9926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9926<K, Paths9926<T[K], Prev9926[D]>> : never }[keyof T]
  : never;

type Prev9926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9926 {
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

type ConfigPaths9926 = Paths9926<NestedConfig9926>;

interface HeavyProps9926 {
  config: DeepPartial9926<NestedConfig9926>;
  path?: ConfigPaths9926;
}

const HeavyComponent9926 = memo(function HeavyComponent9926({ config }: HeavyProps9926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9926.displayName = 'HeavyComponent9926';
export default HeavyComponent9926;
