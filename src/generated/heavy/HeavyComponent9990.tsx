'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9990<T> = T extends (infer U)[]
  ? DeepReadonlyArray9990<U>
  : T extends object
  ? DeepReadonlyObject9990<T>
  : T;

interface DeepReadonlyArray9990<T> extends ReadonlyArray<DeepReadonly9990<T>> {}

type DeepReadonlyObject9990<T> = {
  readonly [P in keyof T]: DeepReadonly9990<T[P]>;
};

type UnionToIntersection9990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9990<T> = UnionToIntersection9990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9990<T extends unknown[], V> = [...T, V];

type TuplifyUnion9990<T, L = LastOf9990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9990<TuplifyUnion9990<Exclude<T, L>>, L>;

type DeepPartial9990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9990<T[P]> }
  : T;

type Paths9990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9990<K, Paths9990<T[K], Prev9990[D]>> : never }[keyof T]
  : never;

type Prev9990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9990 {
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

type ConfigPaths9990 = Paths9990<NestedConfig9990>;

interface HeavyProps9990 {
  config: DeepPartial9990<NestedConfig9990>;
  path?: ConfigPaths9990;
}

const HeavyComponent9990 = memo(function HeavyComponent9990({ config }: HeavyProps9990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9990.displayName = 'HeavyComponent9990';
export default HeavyComponent9990;
