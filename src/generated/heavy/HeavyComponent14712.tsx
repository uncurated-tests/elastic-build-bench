'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14712<T> = T extends (infer U)[]
  ? DeepReadonlyArray14712<U>
  : T extends object
  ? DeepReadonlyObject14712<T>
  : T;

interface DeepReadonlyArray14712<T> extends ReadonlyArray<DeepReadonly14712<T>> {}

type DeepReadonlyObject14712<T> = {
  readonly [P in keyof T]: DeepReadonly14712<T[P]>;
};

type UnionToIntersection14712<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14712<T> = UnionToIntersection14712<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14712<T extends unknown[], V> = [...T, V];

type TuplifyUnion14712<T, L = LastOf14712<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14712<TuplifyUnion14712<Exclude<T, L>>, L>;

type DeepPartial14712<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14712<T[P]> }
  : T;

type Paths14712<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14712<K, Paths14712<T[K], Prev14712[D]>> : never }[keyof T]
  : never;

type Prev14712 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14712<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14712 {
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

type ConfigPaths14712 = Paths14712<NestedConfig14712>;

interface HeavyProps14712 {
  config: DeepPartial14712<NestedConfig14712>;
  path?: ConfigPaths14712;
}

const HeavyComponent14712 = memo(function HeavyComponent14712({ config }: HeavyProps14712) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14712) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14712 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14712: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14712.displayName = 'HeavyComponent14712';
export default HeavyComponent14712;
