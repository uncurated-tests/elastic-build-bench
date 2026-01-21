'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14555<T> = T extends (infer U)[]
  ? DeepReadonlyArray14555<U>
  : T extends object
  ? DeepReadonlyObject14555<T>
  : T;

interface DeepReadonlyArray14555<T> extends ReadonlyArray<DeepReadonly14555<T>> {}

type DeepReadonlyObject14555<T> = {
  readonly [P in keyof T]: DeepReadonly14555<T[P]>;
};

type UnionToIntersection14555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14555<T> = UnionToIntersection14555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14555<T extends unknown[], V> = [...T, V];

type TuplifyUnion14555<T, L = LastOf14555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14555<TuplifyUnion14555<Exclude<T, L>>, L>;

type DeepPartial14555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14555<T[P]> }
  : T;

type Paths14555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14555<K, Paths14555<T[K], Prev14555[D]>> : never }[keyof T]
  : never;

type Prev14555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14555 {
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

type ConfigPaths14555 = Paths14555<NestedConfig14555>;

interface HeavyProps14555 {
  config: DeepPartial14555<NestedConfig14555>;
  path?: ConfigPaths14555;
}

const HeavyComponent14555 = memo(function HeavyComponent14555({ config }: HeavyProps14555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14555.displayName = 'HeavyComponent14555';
export default HeavyComponent14555;
