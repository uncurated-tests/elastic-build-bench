'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14757<T> = T extends (infer U)[]
  ? DeepReadonlyArray14757<U>
  : T extends object
  ? DeepReadonlyObject14757<T>
  : T;

interface DeepReadonlyArray14757<T> extends ReadonlyArray<DeepReadonly14757<T>> {}

type DeepReadonlyObject14757<T> = {
  readonly [P in keyof T]: DeepReadonly14757<T[P]>;
};

type UnionToIntersection14757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14757<T> = UnionToIntersection14757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14757<T extends unknown[], V> = [...T, V];

type TuplifyUnion14757<T, L = LastOf14757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14757<TuplifyUnion14757<Exclude<T, L>>, L>;

type DeepPartial14757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14757<T[P]> }
  : T;

type Paths14757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14757<K, Paths14757<T[K], Prev14757[D]>> : never }[keyof T]
  : never;

type Prev14757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14757 {
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

type ConfigPaths14757 = Paths14757<NestedConfig14757>;

interface HeavyProps14757 {
  config: DeepPartial14757<NestedConfig14757>;
  path?: ConfigPaths14757;
}

const HeavyComponent14757 = memo(function HeavyComponent14757({ config }: HeavyProps14757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14757.displayName = 'HeavyComponent14757';
export default HeavyComponent14757;
