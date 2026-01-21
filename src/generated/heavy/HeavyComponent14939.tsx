'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14939<T> = T extends (infer U)[]
  ? DeepReadonlyArray14939<U>
  : T extends object
  ? DeepReadonlyObject14939<T>
  : T;

interface DeepReadonlyArray14939<T> extends ReadonlyArray<DeepReadonly14939<T>> {}

type DeepReadonlyObject14939<T> = {
  readonly [P in keyof T]: DeepReadonly14939<T[P]>;
};

type UnionToIntersection14939<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14939<T> = UnionToIntersection14939<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14939<T extends unknown[], V> = [...T, V];

type TuplifyUnion14939<T, L = LastOf14939<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14939<TuplifyUnion14939<Exclude<T, L>>, L>;

type DeepPartial14939<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14939<T[P]> }
  : T;

type Paths14939<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14939<K, Paths14939<T[K], Prev14939[D]>> : never }[keyof T]
  : never;

type Prev14939 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14939<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14939 {
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

type ConfigPaths14939 = Paths14939<NestedConfig14939>;

interface HeavyProps14939 {
  config: DeepPartial14939<NestedConfig14939>;
  path?: ConfigPaths14939;
}

const HeavyComponent14939 = memo(function HeavyComponent14939({ config }: HeavyProps14939) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14939) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14939 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14939: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14939.displayName = 'HeavyComponent14939';
export default HeavyComponent14939;
