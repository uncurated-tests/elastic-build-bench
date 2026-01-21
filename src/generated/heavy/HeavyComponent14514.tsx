'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14514<T> = T extends (infer U)[]
  ? DeepReadonlyArray14514<U>
  : T extends object
  ? DeepReadonlyObject14514<T>
  : T;

interface DeepReadonlyArray14514<T> extends ReadonlyArray<DeepReadonly14514<T>> {}

type DeepReadonlyObject14514<T> = {
  readonly [P in keyof T]: DeepReadonly14514<T[P]>;
};

type UnionToIntersection14514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14514<T> = UnionToIntersection14514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14514<T extends unknown[], V> = [...T, V];

type TuplifyUnion14514<T, L = LastOf14514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14514<TuplifyUnion14514<Exclude<T, L>>, L>;

type DeepPartial14514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14514<T[P]> }
  : T;

type Paths14514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14514<K, Paths14514<T[K], Prev14514[D]>> : never }[keyof T]
  : never;

type Prev14514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14514 {
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

type ConfigPaths14514 = Paths14514<NestedConfig14514>;

interface HeavyProps14514 {
  config: DeepPartial14514<NestedConfig14514>;
  path?: ConfigPaths14514;
}

const HeavyComponent14514 = memo(function HeavyComponent14514({ config }: HeavyProps14514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14514.displayName = 'HeavyComponent14514';
export default HeavyComponent14514;
