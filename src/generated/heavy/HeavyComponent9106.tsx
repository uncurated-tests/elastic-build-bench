'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9106<T> = T extends (infer U)[]
  ? DeepReadonlyArray9106<U>
  : T extends object
  ? DeepReadonlyObject9106<T>
  : T;

interface DeepReadonlyArray9106<T> extends ReadonlyArray<DeepReadonly9106<T>> {}

type DeepReadonlyObject9106<T> = {
  readonly [P in keyof T]: DeepReadonly9106<T[P]>;
};

type UnionToIntersection9106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9106<T> = UnionToIntersection9106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9106<T extends unknown[], V> = [...T, V];

type TuplifyUnion9106<T, L = LastOf9106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9106<TuplifyUnion9106<Exclude<T, L>>, L>;

type DeepPartial9106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9106<T[P]> }
  : T;

type Paths9106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9106<K, Paths9106<T[K], Prev9106[D]>> : never }[keyof T]
  : never;

type Prev9106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9106 {
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

type ConfigPaths9106 = Paths9106<NestedConfig9106>;

interface HeavyProps9106 {
  config: DeepPartial9106<NestedConfig9106>;
  path?: ConfigPaths9106;
}

const HeavyComponent9106 = memo(function HeavyComponent9106({ config }: HeavyProps9106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9106.displayName = 'HeavyComponent9106';
export default HeavyComponent9106;
