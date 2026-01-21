'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14894<T> = T extends (infer U)[]
  ? DeepReadonlyArray14894<U>
  : T extends object
  ? DeepReadonlyObject14894<T>
  : T;

interface DeepReadonlyArray14894<T> extends ReadonlyArray<DeepReadonly14894<T>> {}

type DeepReadonlyObject14894<T> = {
  readonly [P in keyof T]: DeepReadonly14894<T[P]>;
};

type UnionToIntersection14894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14894<T> = UnionToIntersection14894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14894<T extends unknown[], V> = [...T, V];

type TuplifyUnion14894<T, L = LastOf14894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14894<TuplifyUnion14894<Exclude<T, L>>, L>;

type DeepPartial14894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14894<T[P]> }
  : T;

type Paths14894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14894<K, Paths14894<T[K], Prev14894[D]>> : never }[keyof T]
  : never;

type Prev14894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14894 {
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

type ConfigPaths14894 = Paths14894<NestedConfig14894>;

interface HeavyProps14894 {
  config: DeepPartial14894<NestedConfig14894>;
  path?: ConfigPaths14894;
}

const HeavyComponent14894 = memo(function HeavyComponent14894({ config }: HeavyProps14894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14894.displayName = 'HeavyComponent14894';
export default HeavyComponent14894;
