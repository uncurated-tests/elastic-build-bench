'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14513<T> = T extends (infer U)[]
  ? DeepReadonlyArray14513<U>
  : T extends object
  ? DeepReadonlyObject14513<T>
  : T;

interface DeepReadonlyArray14513<T> extends ReadonlyArray<DeepReadonly14513<T>> {}

type DeepReadonlyObject14513<T> = {
  readonly [P in keyof T]: DeepReadonly14513<T[P]>;
};

type UnionToIntersection14513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14513<T> = UnionToIntersection14513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14513<T extends unknown[], V> = [...T, V];

type TuplifyUnion14513<T, L = LastOf14513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14513<TuplifyUnion14513<Exclude<T, L>>, L>;

type DeepPartial14513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14513<T[P]> }
  : T;

type Paths14513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14513<K, Paths14513<T[K], Prev14513[D]>> : never }[keyof T]
  : never;

type Prev14513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14513 {
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

type ConfigPaths14513 = Paths14513<NestedConfig14513>;

interface HeavyProps14513 {
  config: DeepPartial14513<NestedConfig14513>;
  path?: ConfigPaths14513;
}

const HeavyComponent14513 = memo(function HeavyComponent14513({ config }: HeavyProps14513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14513.displayName = 'HeavyComponent14513';
export default HeavyComponent14513;
