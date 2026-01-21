'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14682<T> = T extends (infer U)[]
  ? DeepReadonlyArray14682<U>
  : T extends object
  ? DeepReadonlyObject14682<T>
  : T;

interface DeepReadonlyArray14682<T> extends ReadonlyArray<DeepReadonly14682<T>> {}

type DeepReadonlyObject14682<T> = {
  readonly [P in keyof T]: DeepReadonly14682<T[P]>;
};

type UnionToIntersection14682<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14682<T> = UnionToIntersection14682<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14682<T extends unknown[], V> = [...T, V];

type TuplifyUnion14682<T, L = LastOf14682<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14682<TuplifyUnion14682<Exclude<T, L>>, L>;

type DeepPartial14682<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14682<T[P]> }
  : T;

type Paths14682<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14682<K, Paths14682<T[K], Prev14682[D]>> : never }[keyof T]
  : never;

type Prev14682 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14682<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14682 {
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

type ConfigPaths14682 = Paths14682<NestedConfig14682>;

interface HeavyProps14682 {
  config: DeepPartial14682<NestedConfig14682>;
  path?: ConfigPaths14682;
}

const HeavyComponent14682 = memo(function HeavyComponent14682({ config }: HeavyProps14682) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14682) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14682 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14682: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14682.displayName = 'HeavyComponent14682';
export default HeavyComponent14682;
