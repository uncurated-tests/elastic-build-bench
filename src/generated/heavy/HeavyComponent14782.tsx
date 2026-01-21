'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14782<T> = T extends (infer U)[]
  ? DeepReadonlyArray14782<U>
  : T extends object
  ? DeepReadonlyObject14782<T>
  : T;

interface DeepReadonlyArray14782<T> extends ReadonlyArray<DeepReadonly14782<T>> {}

type DeepReadonlyObject14782<T> = {
  readonly [P in keyof T]: DeepReadonly14782<T[P]>;
};

type UnionToIntersection14782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14782<T> = UnionToIntersection14782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14782<T extends unknown[], V> = [...T, V];

type TuplifyUnion14782<T, L = LastOf14782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14782<TuplifyUnion14782<Exclude<T, L>>, L>;

type DeepPartial14782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14782<T[P]> }
  : T;

type Paths14782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14782<K, Paths14782<T[K], Prev14782[D]>> : never }[keyof T]
  : never;

type Prev14782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14782 {
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

type ConfigPaths14782 = Paths14782<NestedConfig14782>;

interface HeavyProps14782 {
  config: DeepPartial14782<NestedConfig14782>;
  path?: ConfigPaths14782;
}

const HeavyComponent14782 = memo(function HeavyComponent14782({ config }: HeavyProps14782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14782.displayName = 'HeavyComponent14782';
export default HeavyComponent14782;
