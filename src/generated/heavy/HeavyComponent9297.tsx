'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9297<T> = T extends (infer U)[]
  ? DeepReadonlyArray9297<U>
  : T extends object
  ? DeepReadonlyObject9297<T>
  : T;

interface DeepReadonlyArray9297<T> extends ReadonlyArray<DeepReadonly9297<T>> {}

type DeepReadonlyObject9297<T> = {
  readonly [P in keyof T]: DeepReadonly9297<T[P]>;
};

type UnionToIntersection9297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9297<T> = UnionToIntersection9297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9297<T extends unknown[], V> = [...T, V];

type TuplifyUnion9297<T, L = LastOf9297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9297<TuplifyUnion9297<Exclude<T, L>>, L>;

type DeepPartial9297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9297<T[P]> }
  : T;

type Paths9297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9297<K, Paths9297<T[K], Prev9297[D]>> : never }[keyof T]
  : never;

type Prev9297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9297 {
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

type ConfigPaths9297 = Paths9297<NestedConfig9297>;

interface HeavyProps9297 {
  config: DeepPartial9297<NestedConfig9297>;
  path?: ConfigPaths9297;
}

const HeavyComponent9297 = memo(function HeavyComponent9297({ config }: HeavyProps9297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9297.displayName = 'HeavyComponent9297';
export default HeavyComponent9297;
