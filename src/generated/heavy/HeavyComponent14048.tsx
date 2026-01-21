'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14048<T> = T extends (infer U)[]
  ? DeepReadonlyArray14048<U>
  : T extends object
  ? DeepReadonlyObject14048<T>
  : T;

interface DeepReadonlyArray14048<T> extends ReadonlyArray<DeepReadonly14048<T>> {}

type DeepReadonlyObject14048<T> = {
  readonly [P in keyof T]: DeepReadonly14048<T[P]>;
};

type UnionToIntersection14048<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14048<T> = UnionToIntersection14048<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14048<T extends unknown[], V> = [...T, V];

type TuplifyUnion14048<T, L = LastOf14048<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14048<TuplifyUnion14048<Exclude<T, L>>, L>;

type DeepPartial14048<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14048<T[P]> }
  : T;

type Paths14048<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14048<K, Paths14048<T[K], Prev14048[D]>> : never }[keyof T]
  : never;

type Prev14048 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14048<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14048 {
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

type ConfigPaths14048 = Paths14048<NestedConfig14048>;

interface HeavyProps14048 {
  config: DeepPartial14048<NestedConfig14048>;
  path?: ConfigPaths14048;
}

const HeavyComponent14048 = memo(function HeavyComponent14048({ config }: HeavyProps14048) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14048) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14048 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14048: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14048.displayName = 'HeavyComponent14048';
export default HeavyComponent14048;
