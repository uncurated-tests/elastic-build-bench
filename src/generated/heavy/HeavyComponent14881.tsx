'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14881<T> = T extends (infer U)[]
  ? DeepReadonlyArray14881<U>
  : T extends object
  ? DeepReadonlyObject14881<T>
  : T;

interface DeepReadonlyArray14881<T> extends ReadonlyArray<DeepReadonly14881<T>> {}

type DeepReadonlyObject14881<T> = {
  readonly [P in keyof T]: DeepReadonly14881<T[P]>;
};

type UnionToIntersection14881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14881<T> = UnionToIntersection14881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14881<T extends unknown[], V> = [...T, V];

type TuplifyUnion14881<T, L = LastOf14881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14881<TuplifyUnion14881<Exclude<T, L>>, L>;

type DeepPartial14881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14881<T[P]> }
  : T;

type Paths14881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14881<K, Paths14881<T[K], Prev14881[D]>> : never }[keyof T]
  : never;

type Prev14881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14881 {
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

type ConfigPaths14881 = Paths14881<NestedConfig14881>;

interface HeavyProps14881 {
  config: DeepPartial14881<NestedConfig14881>;
  path?: ConfigPaths14881;
}

const HeavyComponent14881 = memo(function HeavyComponent14881({ config }: HeavyProps14881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14881.displayName = 'HeavyComponent14881';
export default HeavyComponent14881;
