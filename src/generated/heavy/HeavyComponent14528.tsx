'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14528<T> = T extends (infer U)[]
  ? DeepReadonlyArray14528<U>
  : T extends object
  ? DeepReadonlyObject14528<T>
  : T;

interface DeepReadonlyArray14528<T> extends ReadonlyArray<DeepReadonly14528<T>> {}

type DeepReadonlyObject14528<T> = {
  readonly [P in keyof T]: DeepReadonly14528<T[P]>;
};

type UnionToIntersection14528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14528<T> = UnionToIntersection14528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14528<T extends unknown[], V> = [...T, V];

type TuplifyUnion14528<T, L = LastOf14528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14528<TuplifyUnion14528<Exclude<T, L>>, L>;

type DeepPartial14528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14528<T[P]> }
  : T;

type Paths14528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14528<K, Paths14528<T[K], Prev14528[D]>> : never }[keyof T]
  : never;

type Prev14528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14528 {
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

type ConfigPaths14528 = Paths14528<NestedConfig14528>;

interface HeavyProps14528 {
  config: DeepPartial14528<NestedConfig14528>;
  path?: ConfigPaths14528;
}

const HeavyComponent14528 = memo(function HeavyComponent14528({ config }: HeavyProps14528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14528.displayName = 'HeavyComponent14528';
export default HeavyComponent14528;
