'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14368<T> = T extends (infer U)[]
  ? DeepReadonlyArray14368<U>
  : T extends object
  ? DeepReadonlyObject14368<T>
  : T;

interface DeepReadonlyArray14368<T> extends ReadonlyArray<DeepReadonly14368<T>> {}

type DeepReadonlyObject14368<T> = {
  readonly [P in keyof T]: DeepReadonly14368<T[P]>;
};

type UnionToIntersection14368<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14368<T> = UnionToIntersection14368<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14368<T extends unknown[], V> = [...T, V];

type TuplifyUnion14368<T, L = LastOf14368<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14368<TuplifyUnion14368<Exclude<T, L>>, L>;

type DeepPartial14368<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14368<T[P]> }
  : T;

type Paths14368<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14368<K, Paths14368<T[K], Prev14368[D]>> : never }[keyof T]
  : never;

type Prev14368 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14368<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14368 {
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

type ConfigPaths14368 = Paths14368<NestedConfig14368>;

interface HeavyProps14368 {
  config: DeepPartial14368<NestedConfig14368>;
  path?: ConfigPaths14368;
}

const HeavyComponent14368 = memo(function HeavyComponent14368({ config }: HeavyProps14368) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14368) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14368 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14368: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14368.displayName = 'HeavyComponent14368';
export default HeavyComponent14368;
