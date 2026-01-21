'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14090<T> = T extends (infer U)[]
  ? DeepReadonlyArray14090<U>
  : T extends object
  ? DeepReadonlyObject14090<T>
  : T;

interface DeepReadonlyArray14090<T> extends ReadonlyArray<DeepReadonly14090<T>> {}

type DeepReadonlyObject14090<T> = {
  readonly [P in keyof T]: DeepReadonly14090<T[P]>;
};

type UnionToIntersection14090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14090<T> = UnionToIntersection14090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14090<T extends unknown[], V> = [...T, V];

type TuplifyUnion14090<T, L = LastOf14090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14090<TuplifyUnion14090<Exclude<T, L>>, L>;

type DeepPartial14090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14090<T[P]> }
  : T;

type Paths14090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14090<K, Paths14090<T[K], Prev14090[D]>> : never }[keyof T]
  : never;

type Prev14090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14090 {
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

type ConfigPaths14090 = Paths14090<NestedConfig14090>;

interface HeavyProps14090 {
  config: DeepPartial14090<NestedConfig14090>;
  path?: ConfigPaths14090;
}

const HeavyComponent14090 = memo(function HeavyComponent14090({ config }: HeavyProps14090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14090.displayName = 'HeavyComponent14090';
export default HeavyComponent14090;
