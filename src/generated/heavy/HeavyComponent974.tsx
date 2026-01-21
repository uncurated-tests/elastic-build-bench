'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly974<T> = T extends (infer U)[]
  ? DeepReadonlyArray974<U>
  : T extends object
  ? DeepReadonlyObject974<T>
  : T;

interface DeepReadonlyArray974<T> extends ReadonlyArray<DeepReadonly974<T>> {}

type DeepReadonlyObject974<T> = {
  readonly [P in keyof T]: DeepReadonly974<T[P]>;
};

type UnionToIntersection974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf974<T> = UnionToIntersection974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push974<T extends unknown[], V> = [...T, V];

type TuplifyUnion974<T, L = LastOf974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push974<TuplifyUnion974<Exclude<T, L>>, L>;

type DeepPartial974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial974<T[P]> }
  : T;

type Paths974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join974<K, Paths974<T[K], Prev974[D]>> : never }[keyof T]
  : never;

type Prev974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig974 {
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

type ConfigPaths974 = Paths974<NestedConfig974>;

interface HeavyProps974 {
  config: DeepPartial974<NestedConfig974>;
  path?: ConfigPaths974;
}

const HeavyComponent974 = memo(function HeavyComponent974({ config }: HeavyProps974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent974.displayName = 'HeavyComponent974';
export default HeavyComponent974;
