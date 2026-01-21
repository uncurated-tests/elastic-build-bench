'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14506<T> = T extends (infer U)[]
  ? DeepReadonlyArray14506<U>
  : T extends object
  ? DeepReadonlyObject14506<T>
  : T;

interface DeepReadonlyArray14506<T> extends ReadonlyArray<DeepReadonly14506<T>> {}

type DeepReadonlyObject14506<T> = {
  readonly [P in keyof T]: DeepReadonly14506<T[P]>;
};

type UnionToIntersection14506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14506<T> = UnionToIntersection14506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14506<T extends unknown[], V> = [...T, V];

type TuplifyUnion14506<T, L = LastOf14506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14506<TuplifyUnion14506<Exclude<T, L>>, L>;

type DeepPartial14506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14506<T[P]> }
  : T;

type Paths14506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14506<K, Paths14506<T[K], Prev14506[D]>> : never }[keyof T]
  : never;

type Prev14506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14506 {
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

type ConfigPaths14506 = Paths14506<NestedConfig14506>;

interface HeavyProps14506 {
  config: DeepPartial14506<NestedConfig14506>;
  path?: ConfigPaths14506;
}

const HeavyComponent14506 = memo(function HeavyComponent14506({ config }: HeavyProps14506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14506.displayName = 'HeavyComponent14506';
export default HeavyComponent14506;
