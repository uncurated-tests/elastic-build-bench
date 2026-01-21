'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14558<T> = T extends (infer U)[]
  ? DeepReadonlyArray14558<U>
  : T extends object
  ? DeepReadonlyObject14558<T>
  : T;

interface DeepReadonlyArray14558<T> extends ReadonlyArray<DeepReadonly14558<T>> {}

type DeepReadonlyObject14558<T> = {
  readonly [P in keyof T]: DeepReadonly14558<T[P]>;
};

type UnionToIntersection14558<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14558<T> = UnionToIntersection14558<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14558<T extends unknown[], V> = [...T, V];

type TuplifyUnion14558<T, L = LastOf14558<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14558<TuplifyUnion14558<Exclude<T, L>>, L>;

type DeepPartial14558<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14558<T[P]> }
  : T;

type Paths14558<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14558<K, Paths14558<T[K], Prev14558[D]>> : never }[keyof T]
  : never;

type Prev14558 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14558<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14558 {
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

type ConfigPaths14558 = Paths14558<NestedConfig14558>;

interface HeavyProps14558 {
  config: DeepPartial14558<NestedConfig14558>;
  path?: ConfigPaths14558;
}

const HeavyComponent14558 = memo(function HeavyComponent14558({ config }: HeavyProps14558) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14558) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14558 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14558: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14558.displayName = 'HeavyComponent14558';
export default HeavyComponent14558;
