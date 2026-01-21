'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9138<T> = T extends (infer U)[]
  ? DeepReadonlyArray9138<U>
  : T extends object
  ? DeepReadonlyObject9138<T>
  : T;

interface DeepReadonlyArray9138<T> extends ReadonlyArray<DeepReadonly9138<T>> {}

type DeepReadonlyObject9138<T> = {
  readonly [P in keyof T]: DeepReadonly9138<T[P]>;
};

type UnionToIntersection9138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9138<T> = UnionToIntersection9138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9138<T extends unknown[], V> = [...T, V];

type TuplifyUnion9138<T, L = LastOf9138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9138<TuplifyUnion9138<Exclude<T, L>>, L>;

type DeepPartial9138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9138<T[P]> }
  : T;

type Paths9138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9138<K, Paths9138<T[K], Prev9138[D]>> : never }[keyof T]
  : never;

type Prev9138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9138 {
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

type ConfigPaths9138 = Paths9138<NestedConfig9138>;

interface HeavyProps9138 {
  config: DeepPartial9138<NestedConfig9138>;
  path?: ConfigPaths9138;
}

const HeavyComponent9138 = memo(function HeavyComponent9138({ config }: HeavyProps9138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9138.displayName = 'HeavyComponent9138';
export default HeavyComponent9138;
