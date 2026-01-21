'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14577<T> = T extends (infer U)[]
  ? DeepReadonlyArray14577<U>
  : T extends object
  ? DeepReadonlyObject14577<T>
  : T;

interface DeepReadonlyArray14577<T> extends ReadonlyArray<DeepReadonly14577<T>> {}

type DeepReadonlyObject14577<T> = {
  readonly [P in keyof T]: DeepReadonly14577<T[P]>;
};

type UnionToIntersection14577<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14577<T> = UnionToIntersection14577<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14577<T extends unknown[], V> = [...T, V];

type TuplifyUnion14577<T, L = LastOf14577<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14577<TuplifyUnion14577<Exclude<T, L>>, L>;

type DeepPartial14577<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14577<T[P]> }
  : T;

type Paths14577<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14577<K, Paths14577<T[K], Prev14577[D]>> : never }[keyof T]
  : never;

type Prev14577 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14577<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14577 {
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

type ConfigPaths14577 = Paths14577<NestedConfig14577>;

interface HeavyProps14577 {
  config: DeepPartial14577<NestedConfig14577>;
  path?: ConfigPaths14577;
}

const HeavyComponent14577 = memo(function HeavyComponent14577({ config }: HeavyProps14577) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14577) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14577 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14577: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14577.displayName = 'HeavyComponent14577';
export default HeavyComponent14577;
