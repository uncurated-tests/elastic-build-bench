'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14673<T> = T extends (infer U)[]
  ? DeepReadonlyArray14673<U>
  : T extends object
  ? DeepReadonlyObject14673<T>
  : T;

interface DeepReadonlyArray14673<T> extends ReadonlyArray<DeepReadonly14673<T>> {}

type DeepReadonlyObject14673<T> = {
  readonly [P in keyof T]: DeepReadonly14673<T[P]>;
};

type UnionToIntersection14673<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14673<T> = UnionToIntersection14673<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14673<T extends unknown[], V> = [...T, V];

type TuplifyUnion14673<T, L = LastOf14673<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14673<TuplifyUnion14673<Exclude<T, L>>, L>;

type DeepPartial14673<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14673<T[P]> }
  : T;

type Paths14673<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14673<K, Paths14673<T[K], Prev14673[D]>> : never }[keyof T]
  : never;

type Prev14673 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14673<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14673 {
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

type ConfigPaths14673 = Paths14673<NestedConfig14673>;

interface HeavyProps14673 {
  config: DeepPartial14673<NestedConfig14673>;
  path?: ConfigPaths14673;
}

const HeavyComponent14673 = memo(function HeavyComponent14673({ config }: HeavyProps14673) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14673) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14673 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14673: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14673.displayName = 'HeavyComponent14673';
export default HeavyComponent14673;
