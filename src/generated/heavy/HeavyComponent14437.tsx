'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14437<T> = T extends (infer U)[]
  ? DeepReadonlyArray14437<U>
  : T extends object
  ? DeepReadonlyObject14437<T>
  : T;

interface DeepReadonlyArray14437<T> extends ReadonlyArray<DeepReadonly14437<T>> {}

type DeepReadonlyObject14437<T> = {
  readonly [P in keyof T]: DeepReadonly14437<T[P]>;
};

type UnionToIntersection14437<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14437<T> = UnionToIntersection14437<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14437<T extends unknown[], V> = [...T, V];

type TuplifyUnion14437<T, L = LastOf14437<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14437<TuplifyUnion14437<Exclude<T, L>>, L>;

type DeepPartial14437<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14437<T[P]> }
  : T;

type Paths14437<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14437<K, Paths14437<T[K], Prev14437[D]>> : never }[keyof T]
  : never;

type Prev14437 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14437<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14437 {
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

type ConfigPaths14437 = Paths14437<NestedConfig14437>;

interface HeavyProps14437 {
  config: DeepPartial14437<NestedConfig14437>;
  path?: ConfigPaths14437;
}

const HeavyComponent14437 = memo(function HeavyComponent14437({ config }: HeavyProps14437) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14437) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14437 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14437: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14437.displayName = 'HeavyComponent14437';
export default HeavyComponent14437;
