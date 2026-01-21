'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14135<T> = T extends (infer U)[]
  ? DeepReadonlyArray14135<U>
  : T extends object
  ? DeepReadonlyObject14135<T>
  : T;

interface DeepReadonlyArray14135<T> extends ReadonlyArray<DeepReadonly14135<T>> {}

type DeepReadonlyObject14135<T> = {
  readonly [P in keyof T]: DeepReadonly14135<T[P]>;
};

type UnionToIntersection14135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14135<T> = UnionToIntersection14135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14135<T extends unknown[], V> = [...T, V];

type TuplifyUnion14135<T, L = LastOf14135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14135<TuplifyUnion14135<Exclude<T, L>>, L>;

type DeepPartial14135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14135<T[P]> }
  : T;

type Paths14135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14135<K, Paths14135<T[K], Prev14135[D]>> : never }[keyof T]
  : never;

type Prev14135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14135 {
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

type ConfigPaths14135 = Paths14135<NestedConfig14135>;

interface HeavyProps14135 {
  config: DeepPartial14135<NestedConfig14135>;
  path?: ConfigPaths14135;
}

const HeavyComponent14135 = memo(function HeavyComponent14135({ config }: HeavyProps14135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14135.displayName = 'HeavyComponent14135';
export default HeavyComponent14135;
