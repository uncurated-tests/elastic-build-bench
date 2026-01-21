'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4084<T> = T extends (infer U)[]
  ? DeepReadonlyArray4084<U>
  : T extends object
  ? DeepReadonlyObject4084<T>
  : T;

interface DeepReadonlyArray4084<T> extends ReadonlyArray<DeepReadonly4084<T>> {}

type DeepReadonlyObject4084<T> = {
  readonly [P in keyof T]: DeepReadonly4084<T[P]>;
};

type UnionToIntersection4084<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4084<T> = UnionToIntersection4084<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4084<T extends unknown[], V> = [...T, V];

type TuplifyUnion4084<T, L = LastOf4084<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4084<TuplifyUnion4084<Exclude<T, L>>, L>;

type DeepPartial4084<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4084<T[P]> }
  : T;

type Paths4084<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4084<K, Paths4084<T[K], Prev4084[D]>> : never }[keyof T]
  : never;

type Prev4084 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4084<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4084 {
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

type ConfigPaths4084 = Paths4084<NestedConfig4084>;

interface HeavyProps4084 {
  config: DeepPartial4084<NestedConfig4084>;
  path?: ConfigPaths4084;
}

const HeavyComponent4084 = memo(function HeavyComponent4084({ config }: HeavyProps4084) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4084) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4084 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4084: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4084.displayName = 'HeavyComponent4084';
export default HeavyComponent4084;
