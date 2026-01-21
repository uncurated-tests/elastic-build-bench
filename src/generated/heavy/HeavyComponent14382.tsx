'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14382<T> = T extends (infer U)[]
  ? DeepReadonlyArray14382<U>
  : T extends object
  ? DeepReadonlyObject14382<T>
  : T;

interface DeepReadonlyArray14382<T> extends ReadonlyArray<DeepReadonly14382<T>> {}

type DeepReadonlyObject14382<T> = {
  readonly [P in keyof T]: DeepReadonly14382<T[P]>;
};

type UnionToIntersection14382<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14382<T> = UnionToIntersection14382<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14382<T extends unknown[], V> = [...T, V];

type TuplifyUnion14382<T, L = LastOf14382<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14382<TuplifyUnion14382<Exclude<T, L>>, L>;

type DeepPartial14382<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14382<T[P]> }
  : T;

type Paths14382<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14382<K, Paths14382<T[K], Prev14382[D]>> : never }[keyof T]
  : never;

type Prev14382 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14382<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14382 {
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

type ConfigPaths14382 = Paths14382<NestedConfig14382>;

interface HeavyProps14382 {
  config: DeepPartial14382<NestedConfig14382>;
  path?: ConfigPaths14382;
}

const HeavyComponent14382 = memo(function HeavyComponent14382({ config }: HeavyProps14382) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14382) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14382 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14382: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14382.displayName = 'HeavyComponent14382';
export default HeavyComponent14382;
