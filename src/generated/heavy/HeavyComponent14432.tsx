'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14432<T> = T extends (infer U)[]
  ? DeepReadonlyArray14432<U>
  : T extends object
  ? DeepReadonlyObject14432<T>
  : T;

interface DeepReadonlyArray14432<T> extends ReadonlyArray<DeepReadonly14432<T>> {}

type DeepReadonlyObject14432<T> = {
  readonly [P in keyof T]: DeepReadonly14432<T[P]>;
};

type UnionToIntersection14432<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14432<T> = UnionToIntersection14432<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14432<T extends unknown[], V> = [...T, V];

type TuplifyUnion14432<T, L = LastOf14432<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14432<TuplifyUnion14432<Exclude<T, L>>, L>;

type DeepPartial14432<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14432<T[P]> }
  : T;

type Paths14432<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14432<K, Paths14432<T[K], Prev14432[D]>> : never }[keyof T]
  : never;

type Prev14432 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14432<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14432 {
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

type ConfigPaths14432 = Paths14432<NestedConfig14432>;

interface HeavyProps14432 {
  config: DeepPartial14432<NestedConfig14432>;
  path?: ConfigPaths14432;
}

const HeavyComponent14432 = memo(function HeavyComponent14432({ config }: HeavyProps14432) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14432) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14432 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14432: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14432.displayName = 'HeavyComponent14432';
export default HeavyComponent14432;
