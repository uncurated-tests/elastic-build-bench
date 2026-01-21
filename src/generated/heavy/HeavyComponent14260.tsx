'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14260<T> = T extends (infer U)[]
  ? DeepReadonlyArray14260<U>
  : T extends object
  ? DeepReadonlyObject14260<T>
  : T;

interface DeepReadonlyArray14260<T> extends ReadonlyArray<DeepReadonly14260<T>> {}

type DeepReadonlyObject14260<T> = {
  readonly [P in keyof T]: DeepReadonly14260<T[P]>;
};

type UnionToIntersection14260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14260<T> = UnionToIntersection14260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14260<T extends unknown[], V> = [...T, V];

type TuplifyUnion14260<T, L = LastOf14260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14260<TuplifyUnion14260<Exclude<T, L>>, L>;

type DeepPartial14260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14260<T[P]> }
  : T;

type Paths14260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14260<K, Paths14260<T[K], Prev14260[D]>> : never }[keyof T]
  : never;

type Prev14260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14260 {
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

type ConfigPaths14260 = Paths14260<NestedConfig14260>;

interface HeavyProps14260 {
  config: DeepPartial14260<NestedConfig14260>;
  path?: ConfigPaths14260;
}

const HeavyComponent14260 = memo(function HeavyComponent14260({ config }: HeavyProps14260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14260.displayName = 'HeavyComponent14260';
export default HeavyComponent14260;
