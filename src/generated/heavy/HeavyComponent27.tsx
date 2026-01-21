'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly27<T> = T extends (infer U)[]
  ? DeepReadonlyArray27<U>
  : T extends object
  ? DeepReadonlyObject27<T>
  : T;

interface DeepReadonlyArray27<T> extends ReadonlyArray<DeepReadonly27<T>> {}

type DeepReadonlyObject27<T> = {
  readonly [P in keyof T]: DeepReadonly27<T[P]>;
};

type UnionToIntersection27<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf27<T> = UnionToIntersection27<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push27<T extends unknown[], V> = [...T, V];

type TuplifyUnion27<T, L = LastOf27<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push27<TuplifyUnion27<Exclude<T, L>>, L>;

type DeepPartial27<T> = T extends object
  ? { [P in keyof T]?: DeepPartial27<T[P]> }
  : T;

type Paths27<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join27<K, Paths27<T[K], Prev27[D]>> : never }[keyof T]
  : never;

type Prev27 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join27<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig27 {
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

type ConfigPaths27 = Paths27<NestedConfig27>;

interface HeavyProps27 {
  config: DeepPartial27<NestedConfig27>;
  path?: ConfigPaths27;
}

const HeavyComponent27 = memo(function HeavyComponent27({ config }: HeavyProps27) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 27) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-27 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H27: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent27.displayName = 'HeavyComponent27';
export default HeavyComponent27;
