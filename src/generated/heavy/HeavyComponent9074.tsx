'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9074<T> = T extends (infer U)[]
  ? DeepReadonlyArray9074<U>
  : T extends object
  ? DeepReadonlyObject9074<T>
  : T;

interface DeepReadonlyArray9074<T> extends ReadonlyArray<DeepReadonly9074<T>> {}

type DeepReadonlyObject9074<T> = {
  readonly [P in keyof T]: DeepReadonly9074<T[P]>;
};

type UnionToIntersection9074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9074<T> = UnionToIntersection9074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9074<T extends unknown[], V> = [...T, V];

type TuplifyUnion9074<T, L = LastOf9074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9074<TuplifyUnion9074<Exclude<T, L>>, L>;

type DeepPartial9074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9074<T[P]> }
  : T;

type Paths9074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9074<K, Paths9074<T[K], Prev9074[D]>> : never }[keyof T]
  : never;

type Prev9074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9074 {
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

type ConfigPaths9074 = Paths9074<NestedConfig9074>;

interface HeavyProps9074 {
  config: DeepPartial9074<NestedConfig9074>;
  path?: ConfigPaths9074;
}

const HeavyComponent9074 = memo(function HeavyComponent9074({ config }: HeavyProps9074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9074.displayName = 'HeavyComponent9074';
export default HeavyComponent9074;
