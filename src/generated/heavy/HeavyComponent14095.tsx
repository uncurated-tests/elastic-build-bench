'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14095<T> = T extends (infer U)[]
  ? DeepReadonlyArray14095<U>
  : T extends object
  ? DeepReadonlyObject14095<T>
  : T;

interface DeepReadonlyArray14095<T> extends ReadonlyArray<DeepReadonly14095<T>> {}

type DeepReadonlyObject14095<T> = {
  readonly [P in keyof T]: DeepReadonly14095<T[P]>;
};

type UnionToIntersection14095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14095<T> = UnionToIntersection14095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14095<T extends unknown[], V> = [...T, V];

type TuplifyUnion14095<T, L = LastOf14095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14095<TuplifyUnion14095<Exclude<T, L>>, L>;

type DeepPartial14095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14095<T[P]> }
  : T;

type Paths14095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14095<K, Paths14095<T[K], Prev14095[D]>> : never }[keyof T]
  : never;

type Prev14095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14095 {
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

type ConfigPaths14095 = Paths14095<NestedConfig14095>;

interface HeavyProps14095 {
  config: DeepPartial14095<NestedConfig14095>;
  path?: ConfigPaths14095;
}

const HeavyComponent14095 = memo(function HeavyComponent14095({ config }: HeavyProps14095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14095.displayName = 'HeavyComponent14095';
export default HeavyComponent14095;
