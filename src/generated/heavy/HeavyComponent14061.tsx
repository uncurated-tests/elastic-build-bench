'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14061<T> = T extends (infer U)[]
  ? DeepReadonlyArray14061<U>
  : T extends object
  ? DeepReadonlyObject14061<T>
  : T;

interface DeepReadonlyArray14061<T> extends ReadonlyArray<DeepReadonly14061<T>> {}

type DeepReadonlyObject14061<T> = {
  readonly [P in keyof T]: DeepReadonly14061<T[P]>;
};

type UnionToIntersection14061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14061<T> = UnionToIntersection14061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14061<T extends unknown[], V> = [...T, V];

type TuplifyUnion14061<T, L = LastOf14061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14061<TuplifyUnion14061<Exclude<T, L>>, L>;

type DeepPartial14061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14061<T[P]> }
  : T;

type Paths14061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14061<K, Paths14061<T[K], Prev14061[D]>> : never }[keyof T]
  : never;

type Prev14061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14061 {
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

type ConfigPaths14061 = Paths14061<NestedConfig14061>;

interface HeavyProps14061 {
  config: DeepPartial14061<NestedConfig14061>;
  path?: ConfigPaths14061;
}

const HeavyComponent14061 = memo(function HeavyComponent14061({ config }: HeavyProps14061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14061.displayName = 'HeavyComponent14061';
export default HeavyComponent14061;
