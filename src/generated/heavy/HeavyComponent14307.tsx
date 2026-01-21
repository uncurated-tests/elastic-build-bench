'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14307<T> = T extends (infer U)[]
  ? DeepReadonlyArray14307<U>
  : T extends object
  ? DeepReadonlyObject14307<T>
  : T;

interface DeepReadonlyArray14307<T> extends ReadonlyArray<DeepReadonly14307<T>> {}

type DeepReadonlyObject14307<T> = {
  readonly [P in keyof T]: DeepReadonly14307<T[P]>;
};

type UnionToIntersection14307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14307<T> = UnionToIntersection14307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14307<T extends unknown[], V> = [...T, V];

type TuplifyUnion14307<T, L = LastOf14307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14307<TuplifyUnion14307<Exclude<T, L>>, L>;

type DeepPartial14307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14307<T[P]> }
  : T;

type Paths14307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14307<K, Paths14307<T[K], Prev14307[D]>> : never }[keyof T]
  : never;

type Prev14307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14307 {
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

type ConfigPaths14307 = Paths14307<NestedConfig14307>;

interface HeavyProps14307 {
  config: DeepPartial14307<NestedConfig14307>;
  path?: ConfigPaths14307;
}

const HeavyComponent14307 = memo(function HeavyComponent14307({ config }: HeavyProps14307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14307.displayName = 'HeavyComponent14307';
export default HeavyComponent14307;
