'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9002<T> = T extends (infer U)[]
  ? DeepReadonlyArray9002<U>
  : T extends object
  ? DeepReadonlyObject9002<T>
  : T;

interface DeepReadonlyArray9002<T> extends ReadonlyArray<DeepReadonly9002<T>> {}

type DeepReadonlyObject9002<T> = {
  readonly [P in keyof T]: DeepReadonly9002<T[P]>;
};

type UnionToIntersection9002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9002<T> = UnionToIntersection9002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9002<T extends unknown[], V> = [...T, V];

type TuplifyUnion9002<T, L = LastOf9002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9002<TuplifyUnion9002<Exclude<T, L>>, L>;

type DeepPartial9002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9002<T[P]> }
  : T;

type Paths9002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9002<K, Paths9002<T[K], Prev9002[D]>> : never }[keyof T]
  : never;

type Prev9002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9002 {
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

type ConfigPaths9002 = Paths9002<NestedConfig9002>;

interface HeavyProps9002 {
  config: DeepPartial9002<NestedConfig9002>;
  path?: ConfigPaths9002;
}

const HeavyComponent9002 = memo(function HeavyComponent9002({ config }: HeavyProps9002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9002.displayName = 'HeavyComponent9002';
export default HeavyComponent9002;
