'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9086<T> = T extends (infer U)[]
  ? DeepReadonlyArray9086<U>
  : T extends object
  ? DeepReadonlyObject9086<T>
  : T;

interface DeepReadonlyArray9086<T> extends ReadonlyArray<DeepReadonly9086<T>> {}

type DeepReadonlyObject9086<T> = {
  readonly [P in keyof T]: DeepReadonly9086<T[P]>;
};

type UnionToIntersection9086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9086<T> = UnionToIntersection9086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9086<T extends unknown[], V> = [...T, V];

type TuplifyUnion9086<T, L = LastOf9086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9086<TuplifyUnion9086<Exclude<T, L>>, L>;

type DeepPartial9086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9086<T[P]> }
  : T;

type Paths9086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9086<K, Paths9086<T[K], Prev9086[D]>> : never }[keyof T]
  : never;

type Prev9086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9086 {
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

type ConfigPaths9086 = Paths9086<NestedConfig9086>;

interface HeavyProps9086 {
  config: DeepPartial9086<NestedConfig9086>;
  path?: ConfigPaths9086;
}

const HeavyComponent9086 = memo(function HeavyComponent9086({ config }: HeavyProps9086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9086.displayName = 'HeavyComponent9086';
export default HeavyComponent9086;
