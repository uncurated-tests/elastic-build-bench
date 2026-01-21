'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9466<T> = T extends (infer U)[]
  ? DeepReadonlyArray9466<U>
  : T extends object
  ? DeepReadonlyObject9466<T>
  : T;

interface DeepReadonlyArray9466<T> extends ReadonlyArray<DeepReadonly9466<T>> {}

type DeepReadonlyObject9466<T> = {
  readonly [P in keyof T]: DeepReadonly9466<T[P]>;
};

type UnionToIntersection9466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9466<T> = UnionToIntersection9466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9466<T extends unknown[], V> = [...T, V];

type TuplifyUnion9466<T, L = LastOf9466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9466<TuplifyUnion9466<Exclude<T, L>>, L>;

type DeepPartial9466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9466<T[P]> }
  : T;

type Paths9466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9466<K, Paths9466<T[K], Prev9466[D]>> : never }[keyof T]
  : never;

type Prev9466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9466 {
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

type ConfigPaths9466 = Paths9466<NestedConfig9466>;

interface HeavyProps9466 {
  config: DeepPartial9466<NestedConfig9466>;
  path?: ConfigPaths9466;
}

const HeavyComponent9466 = memo(function HeavyComponent9466({ config }: HeavyProps9466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9466.displayName = 'HeavyComponent9466';
export default HeavyComponent9466;
