'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14320<T> = T extends (infer U)[]
  ? DeepReadonlyArray14320<U>
  : T extends object
  ? DeepReadonlyObject14320<T>
  : T;

interface DeepReadonlyArray14320<T> extends ReadonlyArray<DeepReadonly14320<T>> {}

type DeepReadonlyObject14320<T> = {
  readonly [P in keyof T]: DeepReadonly14320<T[P]>;
};

type UnionToIntersection14320<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14320<T> = UnionToIntersection14320<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14320<T extends unknown[], V> = [...T, V];

type TuplifyUnion14320<T, L = LastOf14320<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14320<TuplifyUnion14320<Exclude<T, L>>, L>;

type DeepPartial14320<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14320<T[P]> }
  : T;

type Paths14320<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14320<K, Paths14320<T[K], Prev14320[D]>> : never }[keyof T]
  : never;

type Prev14320 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14320<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14320 {
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

type ConfigPaths14320 = Paths14320<NestedConfig14320>;

interface HeavyProps14320 {
  config: DeepPartial14320<NestedConfig14320>;
  path?: ConfigPaths14320;
}

const HeavyComponent14320 = memo(function HeavyComponent14320({ config }: HeavyProps14320) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14320) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14320 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14320: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14320.displayName = 'HeavyComponent14320';
export default HeavyComponent14320;
