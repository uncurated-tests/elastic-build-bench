'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9606<T> = T extends (infer U)[]
  ? DeepReadonlyArray9606<U>
  : T extends object
  ? DeepReadonlyObject9606<T>
  : T;

interface DeepReadonlyArray9606<T> extends ReadonlyArray<DeepReadonly9606<T>> {}

type DeepReadonlyObject9606<T> = {
  readonly [P in keyof T]: DeepReadonly9606<T[P]>;
};

type UnionToIntersection9606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9606<T> = UnionToIntersection9606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9606<T extends unknown[], V> = [...T, V];

type TuplifyUnion9606<T, L = LastOf9606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9606<TuplifyUnion9606<Exclude<T, L>>, L>;

type DeepPartial9606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9606<T[P]> }
  : T;

type Paths9606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9606<K, Paths9606<T[K], Prev9606[D]>> : never }[keyof T]
  : never;

type Prev9606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9606 {
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

type ConfigPaths9606 = Paths9606<NestedConfig9606>;

interface HeavyProps9606 {
  config: DeepPartial9606<NestedConfig9606>;
  path?: ConfigPaths9606;
}

const HeavyComponent9606 = memo(function HeavyComponent9606({ config }: HeavyProps9606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9606.displayName = 'HeavyComponent9606';
export default HeavyComponent9606;
