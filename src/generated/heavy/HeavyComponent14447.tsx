'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14447<T> = T extends (infer U)[]
  ? DeepReadonlyArray14447<U>
  : T extends object
  ? DeepReadonlyObject14447<T>
  : T;

interface DeepReadonlyArray14447<T> extends ReadonlyArray<DeepReadonly14447<T>> {}

type DeepReadonlyObject14447<T> = {
  readonly [P in keyof T]: DeepReadonly14447<T[P]>;
};

type UnionToIntersection14447<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14447<T> = UnionToIntersection14447<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14447<T extends unknown[], V> = [...T, V];

type TuplifyUnion14447<T, L = LastOf14447<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14447<TuplifyUnion14447<Exclude<T, L>>, L>;

type DeepPartial14447<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14447<T[P]> }
  : T;

type Paths14447<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14447<K, Paths14447<T[K], Prev14447[D]>> : never }[keyof T]
  : never;

type Prev14447 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14447<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14447 {
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

type ConfigPaths14447 = Paths14447<NestedConfig14447>;

interface HeavyProps14447 {
  config: DeepPartial14447<NestedConfig14447>;
  path?: ConfigPaths14447;
}

const HeavyComponent14447 = memo(function HeavyComponent14447({ config }: HeavyProps14447) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14447) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14447 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14447: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14447.displayName = 'HeavyComponent14447';
export default HeavyComponent14447;
